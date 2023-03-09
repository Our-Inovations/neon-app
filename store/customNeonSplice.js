import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputFields: [1],
  inputField1: "",
  inputField2: "",
  inputField3: "",
  alignment: "text-center",
  fontSize: 36,
  selectedFont: "font-alexa",
  selectedColor: "#FF00B4",
  backingColor: "clear acrylic",
  optionSecondary: "Text Shape",
  accessories: ["Ac-98"],
  lengthofNeonWord: 0,
  totalPrice: 145,
  imgGenerated: "",
  wallMountingKit: "",
};

const customNeonSplice = createSlice({
  name: "customNeonSplice",
  initialState,
  reducers: {
    updatePrice: (state) => {
      const cost = calculateSelectedCost(state);
      return {
        ...state,
        totalPrice: cost,
      };
    },
    updateInputNums: (state, action) => ({
      ...state,
      inputFields: action.payload,
    }),
    updateInputMessage: (state, action) => {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    },
    updateNeonLenght: (state, action) => ({
      ...state,
      lengthofNeonWord: action.payload,
    }),
    updateAlignment: (state, action) => ({
      ...state,
      alignment: action.payload,
    }),
    updateFontSize: (state, action) => ({ ...state, fontSize: action.payload }),
    updateColor: (state, action) => ({
      ...state,
      selectedColor: action.payload,
    }),
    updateBackingColor: (state, action) => ({
      ...state,
      backingColor: action.payload,
    }),
    updateOptionSecondary: (state, action) => ({
      ...state,
      optionSecondary: action.payload,
    }),
    updateAccessories: (state, action) => {
      const checkFirst = state.accessories.findIndex(
        (item) => item === action.payload
      );
      if (checkFirst !== -1) {
        const accessoriesCopy = [...state.accessories];
        accessoriesCopy.splice(checkFirst, 1);
        return { ...state, accessories: [...accessoriesCopy] };
      } else {
        return {
          ...state,
          accessories: [...state.accessories, action.payload],
        };
      }
    },
    updateDesignFont: (state, action) => ({
      ...state,
      selectedFont: action.payload,
    }),
    updateImgGenerated: (state, action) => ({
      ...state,
      imgGenerated: action.payload,
    }),
    updateWallMountingKit: (state, action) => ({
      ...state,
      wallMountingKit: action.payload,
    }),
  },
});

function calculateSelectedCost(state) {
  let cost = 145;

  if (state.lengthofNeonWord > 2) {
    const newLenght = state.lengthofNeonWord - 2;
    cost += newLenght * 45;
  }

  if (state.wallMountingKit === "sliver") {
    cost += 15;
  }
  if (state.wallMountingKit === "brownze") {
    cost += 20;
  }
  if (state.wallMountingKit === "brown") {
    cost += 15;
  }

  state.accessories.map((accessory) => {
    if (accessory === "Ac-98") {
      cost += 0;
    }
    if (accessory === "AC-97") {
      cost += 10;
    }
    if (accessory === "AC-99") {
      cost += 10;
    }
    if (accessory === "AC-96") {
      cost += 50;
    }
    if (accessory === "AC-95") {
      cost += 10;
    }
  });

  return cost;
}

export const {
  updateInputNums,
  updateInputMessage,
  updateAlignment,
  updateFontSize,
  updateColor,
  updateBackingColor,
  updateOptionSecondary,
  updateAccessories,
  updateNeonLenght,
  updateDesignFont,
  updateSelectedItems,
  updatePrice,
  updateImgGenerated,
  updateWallMountingKit,
} = customNeonSplice.actions;

export default customNeonSplice;
