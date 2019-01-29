import App, { Container } from "next/app";
import Page from "../src/components/Page";
import { GlobalDark, GlobalStyle } from "../src/components/GlobalStyle";
class myApp extends App {
  state = {
    name: "",
    username: "ikeoha_chidi",
    userPassword: "",
    password: "",
    confirmPassword: "",
    email: "",
    twitter: "",
    github: "",
    city: "",
    website: "",
    lang: "",
    fe_f: "",
    be_f: "",
    bio: "",
    other: [],
    currentId: "",
    highlight: false,
    navToggle: true,
    filterClose: true,
    signUpApply: true
  };
  value = {
    state: this.state,
    onHandle: id => {
      this.setState({
        currentId: id
      });
    },
    onChangeForm: e =>
      this.setState({
        [e.target.name]: e.target.value
      }),
    onNavToggle: () => {
      !this.state.navToggle
        ? this.setState({ navToggle: true })
        : this.setState({ navToggle: false });
    },
    onDark: () => {
      !this.state.highlight
        ? this.setState({ highlight: true, navToggle: false })
        : this.setState({ highlight: false, navToggle: false });
    },
    onFilterOpen: () => {
      !this.state.filterClose
        ? this.setState({ filterClose: true })
        : this.setState({ filterClose: false });
    },
    onSignUp: () => {
      !this.state.signUpApply
        ? this.setState({ signUpApply: true })
        : this.setState({ signUpApply: false });
    }
  };

  render() {
    const { Component } = this.props;
    return (
      <Container>
        {this.state.highlight ? <GlobalDark /> : <GlobalStyle />}
        <Page value={this.value}>
          <Component />
        </Page>
      </Container>
    );
  }
}
export default myApp;
