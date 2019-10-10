import React from 'react';
import { Provider } from "context-q";
import { SafeAreaView } from "react-native";
import Viewer from "./components/Viewer";
import Button from "./components/Button";

export default function App() {
  return (
    <Provider defaultState={{ count: 0 }}>
      <SafeAreaView>
        <Viewer/>
        <Button/>
      </SafeAreaView>
    </Provider>
  );
}
