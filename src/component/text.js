/* @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Text } from '@rebass/emotion';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import themeGet from '@styled-system/theme-get';
import { fontSize, fontFamily, color } from 'styled-system';

export const FeatureText = ({ children, ...props }) => (
  <Heading
    as="h1"
    color="black"
    fontSize={['600', '700']}
    fontFamily="mono"
    fontWeight="400"
    mb="400"
    css={css`
      word-break: break-word;
      hyphens: auto;
    `}
    {...props}
  >
    {children}
  </Heading>
);

export const HeadingText = ({ children, ...props }) => (
  <Heading
    as="h2"
    color="black"
    fontSize="400"
    fontFamily="sans"
    fontWeight="700"
    mb="500"
    {...props}
  >
    {children}
  </Heading>
);

export const SubHeadingText = ({ children, ...props }) => (
  <Heading
    as="h3"
    color="black"
    fontSize="400"
    fontFamily="sans"
    fontWeight="400"
    mb="500"
    {...props}
  >
    {children}
  </Heading>
);

export const BodyText = ({ children, ...props }) => (
  <Text
    as="p"
    color="black"
    fontSize="300"
    fontWeight="400"
    lineHeight="1.6"
    fontFamily="sans"
    mt="0"
    mb="400"
    {...props}
  >
    {children}
  </Text>
);

export const MetaText = ({ children, ...props }) => (
  <Text
    as="span"
    color="gray300"
    fontSize="200"
    fontWeight="400"
    lineHeight="1.4"
    fontFamily="sans"
    mb="400"
    {...props}
  >
    {children}
  </Text>
);

export const NavItemText = ({ children, ...props }) => (
  <Text
    as="span"
    color="black"
    fontSize="300"
    fontWeight="400"
    fontFamily="sans"
    letterSpacing="1px"
    textDecoration="none"
    style={{ textTransform: 'uppercase', textDecoration: 'none' }}
    {...props}
  >
    {children}
  </Text>
);

const OL = styled.ol`
  font-family: ${themeGet('fonts.sans')};
  font-weight: 700;
  margin: 0;
  padding-left: 1rem;
  list-style: none;
  ${color}
`;

const LI = styled.li`
  position: relative;
  padding-left: 0.9rem;
  margin-bottom: 1rem;
  counter-increment: level1;
  &:first-of-type {
    counter-reset: level1;
  }
  &:before {
    position: absolute;
    content: counter(level1) ' ';
    left: -0.9rem;
  }
  ${color}
`;

export const OrderList = ({ children, counterColor, color, ...props }) => (
  <OL {...props}>
    {children.map((child, i) => (
      <LI color={counterColor || color || 'currentColor'} key={i + child}>
        <BodyText as="span" color={color}>
          {child}
        </BodyText>
      </LI>
    ))}
  </OL>
);
OrderList.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  ).isRequired,
};

const UL = styled.ul`
  font-family: ${themeGet('fonts.sans')};
  font-weight: 700;
  margin: 0;
  padding-left: 1rem;
  list-style: none;
  ${color}
`;

const ULI = styled.li`
  position: relative;
  padding-left: 0.9rem;
  margin-bottom: 1rem;
  &:before {
    content: '>';
    position: absolute;
    left: -0.9rem;
  }
  ${color}
`;

export const UnorderList = ({ children, color, counterColor, ...props }) => (
  <UL {...props}>
    {children.map((child, i) => (
      <ULI color={counterColor || color || 'currentColor'} key={i + child}>
        <BodyText as="span" color={color}>
          {child}
        </BodyText>
      </ULI>
    ))}
  </UL>
);
UnorderList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export const Code = styled.code`
  background: ${themeGet('colors.gray100')};
  color: ${themeGet('colors.black')};
  font-size: 1em;
  font-weight: 400;
  border-radius: 2px;
  padding: 1px 2px 2px 2px;
`;

export const Anchor = styled.span`
  color: currentColor;
  text-decoration: underline;
  ${fontSize};
  ${fontFamily};
`;