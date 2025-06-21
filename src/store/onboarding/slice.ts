import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type FormData = {
  healthConcerns: string[];
  prioritizedConcerns: string[];
  diets: string[];
  allergies: string[];
  sunExposure: boolean | null;
  smoke: boolean | null;
  alcohol: '0-1' | '2-5' | '5+' | null;
};

const initialState: FormData = {
  healthConcerns: [],
  prioritizedConcerns: [],
  diets: [],
  allergies: [],
  sunExposure: null,
  smoke: null,
  alcohol: null,
};

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    updateFormData: (state, action: PayloadAction<Partial<FormData>>) => {
      Object.assign(state, action.payload);
    },
    clearFormData: () => initialState,
  },
});

export const {updateFormData, clearFormData} = onboardingSlice.actions;
export const onboardingReducer = onboardingSlice.reducer;
