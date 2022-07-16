import '../styles/globals.css'
import Layout from '../components/layout'
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp