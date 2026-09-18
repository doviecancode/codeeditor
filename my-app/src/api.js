import axios from "axios";
import { LANGUAGE_VERSIONS } from "./constants";

export const executeCode = async (language, SourceCode) => {
  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    run: {
      output: `> Running ${language} code...\nHello, Dovie!\n> Execution finished successfully.`,
      stderr: "",
    },
  };
};