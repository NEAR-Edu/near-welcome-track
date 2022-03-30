import { Container, TextInput } from '@mantine/core';

import Search from '@svg/search.svg';

const SearchBar: React.FC = () => {
  return (
    <Container className="flex flex-row-reverse">
      <TextInput
        size="md"
        className="w-1/2 focus-within:w-full transition-all duration-300 ease-in-out relative right-0"
        classNames={{ input: 'focus:ring-primary-blue-2 focus:ring-1 transition-all duration-300 ease-in-out' }}
        icon={<Search />}
        styles={{ input: { borderRadius: '9999px' } }}
        mb="sm"
      />
    </Container>
  );
};

export default SearchBar;
