// Core React
import React, { useState, useEffect } from "react";

// console.log(useState);

// Routing
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// State Management
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "./store"; // Relative path
import { connect } from "react-redux"; // For class components if used

// UI Components (Material-UI as an example)
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

// Icons
import { FaReact } from "react-icons/fa";

// Forms management
import { useForm } from "react-hook-form";

// Data fetching
import axios from "axios";

// Environment Variables
import { API_URL } from "./config"; // Assuming you have a config file

// CSS-in-JS
import styled from "styled-components";
