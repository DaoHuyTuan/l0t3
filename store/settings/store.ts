import { create } from 'zustand'
import { ISettingsAction, ISettingsTypes } from './types'

const defaultState: ISettingsTypes = {
  theme: 'light'
}

export const useSettingsStore = create<ISettingsTypes & ISettingsAction>(
  set => ({
    ...defaultState,
    onChangeSettings: (setting: ISettingsTypes) =>
      set(state => ({
        ...state,
        ...setting
      }))
  })
)
