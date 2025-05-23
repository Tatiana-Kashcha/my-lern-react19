import * as s from "./Hero.styled";

const links = [
  { href: "/", label: "Home" },
  { href: "/bootstrap", label: "Bootstrap" },
  { href: "/recipes", label: "useTransition" },
  { href: "/login-form", label: "useActionState" },
  { href: "/flow", label: "testFlow" },
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
