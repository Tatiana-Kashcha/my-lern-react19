import * as s from "./Hero.styled";

const links = [
  { href: "/", label: "Home" },
  { href: "/bootstrap", label: "Bootstrap" },
];

export const Hero = () => {
  return (
    <s.Container>
      <s.Thumb>
        <s.List>
          {links.map((link, index) => {
            return (
              <li key={index}>
                <s.StyledLink to={link.href}>{link.label}</s.StyledLink>
              </li>
            );
          })}
        </s.List>
      </s.Thumb>
    </s.Container>
  );
};
