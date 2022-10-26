import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from 'styled-components';

const Container = styled.div``;

const FontWrapper = styled.h2`
  font-size: 1rem;
`;

export default function SelectDistrict({ data }) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Container>
      <FormControl fullWidth>
        <InputLabel size="small">
          <FontWrapper>위치</FontWrapper>
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          style={{ width: '8rem', height: '2.8rem' }}
        >
          {data.map((district) => {
            return (
              <MenuItem value={10} key={district.id}>
                <FontWrapper>{district.name}</FontWrapper>
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Container>
    // <Box width={w} marginRight={m} height="100px">

    // </Box>
  );
}
