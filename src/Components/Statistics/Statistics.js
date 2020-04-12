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

import colorCreator from "../Helpers/colorCreator";

const Statistics = ({ stats, title }) => (
  <Section>
    <Title>{title}</Title>
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

ListItem.prototype = {
  colorCreator: PropTypes.func,
};

export default Statistics;
