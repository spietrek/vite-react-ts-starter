import InsightEditor from '../molecules/InsightEditor'

const InsightReports = (): JSX.Element => (
  <div className="p-4" data-testid="wiseProgressReports">
    <h1>Reports</h1>
    <div className="mt-6 min-h-screen">
      <InsightEditor />
    </div>
  </div>
)

export default InsightReports
