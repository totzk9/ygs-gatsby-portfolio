/** @jsx jsx */
import { jsx, Link as TLink } from "theme-ui"
import { Link } from "gatsby"
import { readableColor } from "polished"
import useJodieConfig from "../../../hooks/use-jodie-config"
import styled from "styled-components";

const Navigation = ({ bg }) => {
  const { navigation } = useJodieConfig()

  return (
    <NavContainer>
      <nav
      aria-label="Primary Navigation"
      sx={{
        a: {
          color: readableColor(bg),
          textDecoration: `none`,
          fontSize: [1, 2, 2, 3],
          marginLeft: [2, 3, 3, 0],
          "&:hover,&:focus": {
            color: readableColor(bg, `primary`, `primaryLight`, false),
          },
        },
        ul: {
          margin: 0,
          padding: 0,
          li: {
            listStyle: `none`,
            display: [`inline-block`, `inline-block`, `inline-block`, `block`],
          },
        },
        variant: `navigation`,
      }}
    >
      <ul>
        {navigation.map((navItem) => (
          <li key={navItem.slug}>
            <TLink as={Link} to={navItem.slug}>
              {navItem.name}
            </TLink>
          </li>
        ))}
      </ul>
    </nav>
    </NavContainer>
    
  )
}

export default Navigation

const NavContainer = styled.div`
  padding: 3rem 0;
`