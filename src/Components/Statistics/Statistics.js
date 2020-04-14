import React from "react";
import PropTypes from "prop-types";
import {
  Section,
  Title,
  List,
  Label,
  Percentage,
  ListItem,
} from "./Statistics.styled";

import colorCreator from "../../helpers/colorCreator";

const Statistics = ({ stats, title }) => (
  <Section>
    {title && <Title>{title}</Title>}
    <List>
      {stats.map((stat) => {
        return (
          <ListItem key={stat.id} colorCreator={colorCreator}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </ListItem>
        );
      })}
    </List>
  </Section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};

ListItem.propTypes = {
  colorCreator: PropTypes.func,
};

Statistics.defaultProps = {
  title: "",
};

export default Statistics;
