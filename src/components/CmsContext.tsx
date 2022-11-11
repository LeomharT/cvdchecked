import React from "react";

const cms_srting = "<div><h2>Age ranges for assessing CVD risk</h2>Targeting CVD risk assessment to appropriate age groups enables people at high risk of cardiovascular events to be identified early before they develop overt CVD.This approach helps direct pharmacological strategies for intensive risk factor management to people at high risk and diverts unnecessary interventions away from people at lower risk.</div>";
const cms_html = <div dangerouslySetInnerHTML={{ __html: cms_srting }} />;
export const CmsContext = React.createContext(cms_html);
