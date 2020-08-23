import { useMemo } from "react";
import { useTheme } from "@zeit-ui/react";
import { useConfigs } from "lib/config-context";
import {
  Github,
  Instagram,
  Twitter,
  Facebook,
  Bold,
  Mail,
  Sun,
  Moon,
} from "@zeit-ui/react-icons";

const ServiceItem = ({ i, item }) => {
  return (
    <li key={i}>
      <a href={item.href} target="_blank">
        {i === 0 && <Mail size={48} color="black" />}
        {i === 1 && <Bold size={48} color="black" />}
        {i === 2 && <Github size={48} color="black" />}
        {i === 3 && <Twitter size={48} color="#1DA1F2" />}
        {i === 4 && <Facebook size={48} color="#4267B2" />}
        {i === 5 && <Instagram size={48} color="#E1306C" />}
        {i === 6 && (
          <>
            <img
              src="images/qiita.png"
              style={{ width: "48px", height: "48px" }}
            />
          </>
        )}
        {i === 7 && (
          <img
            src="images/note_logo.png"
            style={{ width: "47px", height: "47px" }}
          />
        )}
      </a>
    </li>
  );
};

const Index = ({ links }) => {
  const theme = useTheme();
  const configs = useConfigs();
  const isDark = useMemo(() => theme.type === "light", [theme.type]);
  const switchTheme = () => configs.onChange(theme.type === "light");
  const themeTitle = "テーマ変更";

  return (
    <div>
      <header id="header-site">
        <div id="header-site-inner">
          <h1>
            @takewell
            <span>
              武井 勇也 (TAKEI Yuya) 1996.5.1
              愛媛県松山市育ち、千葉市のファッションテックの会社で働いてます。
            </span>
          </h1>
          <nav>
            <ul>
              {links.map((item, i) => {
                return <ServiceItem i={i} item={item} key={i} />;
              })}
            </ul>
          </nav>
        </div>
      </header>
      {/* <div style={{ margin: "0 auto;" }}>
        {isDark && (
          <span title={themeTitle} onClick={switchTheme}>
            <Sun size={16} />
          </span>
        )}
        {!isDark && (
          <span title={themeTitle} onClick={switchTheme}>
            <Moon size={16} />
          </span>
        )}
      </div> */}
    </div>
  );
};

Index.getInitialProps = () => {
  const links = [
    {
      href: "mailto:takewell.dev@gmail.com",
    },
    {
      href: "https://blog.takewell.dev",
    },
    {
      href: "https://github.com/takewell",
    },
    {
      href: "https://twitter.com/takewell_",
    },
    {
      href: "https://www.facebook.com/profile.php?id=100009877623537",
    },
    {
      href: "https://www.instagram.com/yuyatakei/?hl=ja",
    },
    {
      href: "https://qiita.com/takewell",
    },
    {
      href: "https://note.mu/takewell",
    },
  ];

  return { links };
};

export default Index;
