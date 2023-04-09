import React, {  useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import DietCard from './DietCard.jsx'
import HorizontalScrollbarexercise from "./HorizontalScrollbarexercise.js";
const Diets = ({ apidata }) => {
  const [data] = useState(apidata);
  const [diet, setDiet] = useState(apidata);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(8);
  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentDiets = diet.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
// console.log(currentDiets);
  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 800, behavior: "smooth" });
  };
  const sort_by = (field, reverse, primer) => {

    const key = primer ?
      function(x) {
        return primer(x[field])
      } :
      function(x) {
        return x[field]
      };
  
    reverse = !reverse ? 1 : -1;
  
    return function(a, b) {
      return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
    }
  };
  const handleSearch = () => {
    if (search) {
      if (search === "all") {
        setDiet(data);
      }
      else if (search === "protien") {
          setDiet(data.sort(sort_by('protein_g', true, parseInt)));
      }
      else if (search === "carb"||search === "carbohydrate") {
          setDiet(data.sort(sort_by('carbohydrates_total_g', true, parseInt)));
      }
      else if (search === "fat") {
          setDiet(data.sort(sort_by('fat_total_g', true, parseInt)));
      }
      else {
        const searchedDiet = data.filter((item) =>
          item.name.toLowerCase().includes(search)
        );
        setDiet(searchedDiet);
      }

      window.scrollTo({ top: 900, left: 100, behavior: "smooth" });
      setSearch("");
    }
  };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="49px"
        textAlign="center"
        color="white"
      >
        Awesome Foods You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{
            input: { fontWeight: "700", border: "none" },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search 'all' for all Foods"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "var(--orange)",
            color: "var(--appColor)",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
            borderRadius: "0%",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box >
      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        { currentDiets.length === 0 ? (
            <Typography
        fontWeight={300}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="49px"
        textAlign="center"
        color="white"
      >
        No Food
      </Typography>
          ) : (
           currentDiets.map((item, index) => (
              <DietCard diet={item} />
            ))
          )}
           </Stack>
          <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
        {diet.length > 9 && (
          <Pagination
            color="primary"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(diet.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
      </Box>
    </Stack>
  );
};

export default Diets;
