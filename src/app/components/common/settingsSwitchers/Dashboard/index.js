import React from "react";
import S from "./styled";
import { selectDashboardSetting } from "app/redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { setSetting } from "app/redux/reducers/dashboardSettingsReducer";
import { SETTINGS } from "app/constants/settings";
import { CONFIG } from "app/components/common/settingsSwitchers/config";

export const DashboardSettingsSwitcher = () => {
  const settings = useSelector(selectDashboardSetting);
  const dispatch = useDispatch();
  const handleSettingChange = (param, setting) => {
    dispatch(setSetting({ param: param, setting: setting }));

    localStorage.setItem(`${param}Saved`, setting);
  };

  return (
    <>
      {CONFIG.dashboard.map((option) => (
        <>
          {option.name}
          <S.Switch>
            {[...Array(option.switchesCount)].map((e, i) => (
              <S.Item
                isActive={
                  settings[option.setting] ===
                  SETTINGS.dashboard[option.setting][option.options[i]]
                }
                onClick={() =>
                  handleSettingChange(
                    option.setting,
                    SETTINGS.dashboard[option.setting][option.options[i]]
                  )
                }
              >
                {option.labels[i]}
              </S.Item>
            ))}
          </S.Switch>
        </>
      ))}
    </>
  );
};