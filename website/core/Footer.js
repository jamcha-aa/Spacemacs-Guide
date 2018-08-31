/**
 * Copyright (c) 2018 jamcha (jamcha.aa@gmail.com), (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license.
 */

const React = require('react');

class Footer extends React.Component {
    docUrl(doc, language) {
        const baseUrl = this.props.config.baseUrl;
        return baseUrl + 'Docusaurus-template/docs/' + (language ? language + '/' : '') + doc;
    }

    pageUrl(doc, language) {
        const baseUrl = this.props.config.baseUrl;
        return baseUrl + (language ? language + '/' : '') + doc;
    }

    render() {
        const currentYear = new Date().getFullYear();
        return (
                <footer className="nav-footer" id="footer">
                <center>
                <section className="copyright">{this.props.config.copyright}</section>
                <img
            src="https://licensebuttons.net/l/by-sa/4.0/88x31.png"
            alt="cc by-sa"
            width="88"
            height="31"
                />
                </center>
                </footer>
        );
    }
}

module.exports = Footer;
