/** @jsx jsx */
import { jsx, Link, useThemeUI } from "theme-ui"
import { readableColor } from "polished"

const Footer = ({ bg }) => {
  const { theme } = useThemeUI()

  const text = readableColor(
    bg,
    theme.colors.textMuted,
    theme.colors.textMutedLight
  )

  return (
    <footer
      sx={{
        position: [`relative`, `relative`, `relative`, `fixed`],
        width: (t) => [`100%`, `100%`, `100%`, t.sidebar.normal, t.sidebar.wide],
        bottom: 0,
        color: text,
        fontSize: 0,
        p: [3, 3, 4],
        background: bg,
        a: {
          color: readableColor(bg),
          "&:hover,&:focus": {
            color: readableColor(bg, `primary`, `primaryLight`, false),
          },
        },
        variant: `footer`,
      }}
    >
      <div>
        &copy; 2021 You Got Spotted
      </div>
      <div>
        Made with <span role="img" aria-label="red heart">❤️</span>
        {` `}
        by
        {` `}
        <Link aria-label="Link to the theme author's website" href="https://www.lekoarts.de/en">
          Tribox Design&reg;
        </Link>
      </div>
    </footer>
  )
}

export default Footer
