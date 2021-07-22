import React from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import { SearchIcon } from "../../graphics/icons";

interface Props {
  /**
   * A callback function to use on searching.
   */
  onSearch: (searchTerm: string) => void;
}

const MovieSearchField: React.FC<Props> = ({ onSearch }) => {
  return (
    <Form>
      <InputGroup>
        <InputGroup.Text id="search-icon">
          <SearchIcon />
        </InputGroup.Text>
        <FormControl
          type="search"
          placeholder="Search Movie"
          className="search-input"
          aria-label="Search"
          onChange={(event) => onSearch(event.target.value)}
          onKeyPress={(event): void => {
            if (event.key === "Enter") {
              event.preventDefault();
              onSearch(event.target.value);
            }
          }}
        />
      </InputGroup>
    </Form>
  );
};

export default MovieSearchField;
