import React,{useState, useEffect} from "react";
import { ethers } from "ethers";
import {contractABI,contractAddress} from '../utils/constatnts'

export const TransactionsContext = React.createContext('');
const { ethereum }:any = window;