/**
 * Copyright (c) 2018 jamcha (jamcha.aa@gmail.com), (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('01.html', language)}>読む</Button>
            <Button href={'https://github.com/jamcha-aa/Spacemacs-Guide/'}>GitHub</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}


class Index extends React.Component {
  render() {
    let language = this.props.language || '';

      return (
              <div>
              <HomeSplash language={language} />
              <div className="mainContainer">
              <div className="productShowcaseSection paddingbottom">
              <MarkdownBlock>{`
スマホの場合は画面左上の「×」で目次の表示/非表示ができます。
`}</MarkdownBlock>
              <p></p>
              <a className="button" href={`https://jamcha-aa.github.io/About/`}> 作品一覧 </a>
              <p></p>
              <MarkdownBlock>{`
Copyright (c) 2018 jamcha (jamcha.aa@gmail.com).

`}</MarkdownBlock>
              </div>
              </div>
              <Container
          padding={['bottom', 'top']}
          background="light"
          className="myCustomClass">
              <MarkdownBlock>{`
この物語はフィクションであり，実在の人物・ソフトウェア・団体とは一切関係ありません。

This novel is licensed under the [Creative Commons Attribution Share Alike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/deed)

![cc by-sa](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)

`}</MarkdownBlock>
              </Container>
              </div>
     );
  }
}

module.exports = Index;
