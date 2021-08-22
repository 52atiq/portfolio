import React, { Component } from 'react'
import { Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import PrivacyDescription from '../components/PrivacyDescription/PrivacyDescription'
import TopNavigation from '../components/TopNavigation/TopNavigation'

export default class PrivacyPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }

    render() {
        return (
           <Fragment>
               <TopNavigation title="Privacy" />
               <PageTop pagetitle="Privacy Policy" />
            <PrivacyDescription />
               <Footer />
           </Fragment>
        )
    }
}