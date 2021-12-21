import report from '@wdio/allure-reporter'
export const addLog = (logData: string) => {
    report.addStep(`STEP : ${logData}`)

}