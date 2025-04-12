import React from 'react';
import ListingEditScreen from './app/screens/ListingEditScreen';
 import * as ImagePicker from "expo-image-picker";
 import * as Permissions from "expo-permissions";
import { useEffect, useState } from "react";
import AppButton from "./app/components/AppButton";
import ImageInput from "./app/components/ImageInput";
import { Image } from "react-native";
import { StyleSheet } from "react-native";

import Screen from "./app/components/Screen";
import ImageInputList from './app/components/ImageInputList';


export default function App() {

  return (
    <ListingEditScreen />
  );
}
