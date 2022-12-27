import { Box, Flex, Select } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { filterData, getFilterValues } from '../utils/filterData';

const getCurrentQuery = (queryObj, queryName) => {
  for (const key in queryObj) {
    if (key === queryName) {
      return queryObj[key];
    }
  }
};

export default function SearchFilters() {
  const [filters, setFilters] = useState(filterData);
  const router = useRouter();
  const { pathname, query } = router;

  const searchProperties = (filterValues) => {
    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      if (item.value && filterValues[item.name]) {
        query[item.name] = item.value; // if item.name is already exit in query object, it will be overwritten by new value
      }
    });

    router.push({ pathname, query });
  };

  return (
    <Flex bg='gray.100' p='4' justifyContent='center' flexWrap='wrap'>
      {filters.map((filter) => (
        <Box key={filter.queryName}>
          <Select
            placeholder={
              getCurrentQuery(query, filter.queryName) || filter.placeholder
            }
            w='fit-content'
            p='2'
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
          >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  );
}
