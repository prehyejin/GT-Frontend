import Header from '../../component/Layout/Header'
import Main from '../../component/Layout/Main'
import Footer from '../../component/Layout/Footer'
import styled from "styled-components";
import GlobalStyle from "../../GlobalStyle";


export default function MainPage(){
    return (
        <div>
            <Header />
            <Main />
            <Footer /> 
        </div>
    )
  }