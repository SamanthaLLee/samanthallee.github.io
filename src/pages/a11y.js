import React from "react"
import { PageTitle, PageLayout } from "../components"
import { Container } from "react-bootstrap"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default () => {
    return (
        <Container fluid className="px-0 white app-container">
            <Container fluid className="pt-5 mt-5 min-vh-100 text-center">
                <h1>Sam Lin Lee</h1>
            </Container>
            <Footer />
        </Container>
    )
}
