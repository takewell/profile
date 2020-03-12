import { FaRegEnvelope, FaGithub, FaTwitter, FaFacebook, FaInstagram} from 'react-icons/fa'

const Index = ({ links }) => (
  <div>
    <header id="header-site">
      <div id="header-site-inner">
        <h1>
          @takewell
          <span>
            武井 勇也 (TAKEI Yuya) 1996.05.01 愛媛県松山市育ち、身分は学生です。
          </span>
        </h1>
        <nav>
          <ul>
            {links.map((item, i) => {
              const Component = item.c
              return (
                <li key={i}>
                  <a href={item.href} target="_blank">
                    {i === 0 && <FaRegEnvelope style={{color: "#505050"}} size="3em"/>}
                    {i === 1 && <img src="../images/blog.takewell.png" alt="blog.takewell" style={{ width: "100%", height: "100%" }} />}
                    {i === 2 && <FaGithub style={{color: "#24292e", backgroudColor: "#24292e" }}  size="3em" />}
                    {i === 3 && <FaTwitter style={{color: "#1da1f2" }}  size="3em" />}
                    {i === 4 && <FaFacebook style={{color: "#4267b2" }}  size="3em" />}
                    {i === 5 && <FaInstagram style={{color: "#000" }}  size="3em" />}
                    {i === 6 && <img src="../images/qiita-favicon.png" style={{ width: "100%", height: "100%" }} />}
                    {i === 7 && <img src="../images/note_logo.png" style={{ width: "100%", height: "100%" }} />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  </div>
);

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
    }
  ];

  return { links };
};

export default Index;
