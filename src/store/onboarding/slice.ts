import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type FormData = {
  healthConcerns: string[];
  prioritizedConcerns: string[];
  diets: string[];
  allergies: string[];
  is_daily_exposure: boolean;
  is_smoke: boolean;
  alcohol: '0-1' | '2-5' | '5+';
};

const initialState: FormData = {
  healthConcerns: [],
  prioritizedConcerns: [],
  diets: [],
  allergies: [],
  is_daily_exposure: false,
  is_smoke: false,
  alcohol: '0-1',
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
