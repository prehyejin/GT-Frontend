import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from 'styled-components';

const Container = styled.div`
  /* height: 0px; */
  width: 200px;
`;

const FontWrapper = styled.h2`
  font-family: Pretendard-Light;
`;

export default function SelectBox({
  keyProperty,
  label,
  onChangeSelected,
  selected,
  items,
  itemKey,
}) {
  return (
    <Container>
      <FormControl fullWidth>
        <InputLabel size="small">
          <FontWrapper>{label}</FontWrapper>
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selected}
          label="Age"
          onChange={onChangeSelected}
        >
          {Array.isArray(items) &&
            items.length > 0 &&
            items.map((item) => {
              const content = itemKey ? item[itemKey] : item.toString();
              return (
                <MenuItem value={content} key={keyProperty ? item[keyProperty] : item.toString()}>
                  <FontWrapper>{content}</FontWrapper>
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </Container>
  );
}
