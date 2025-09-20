export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea
        id="wd-description"
        rows={5}
        cols={50}
        defaultValue="This is the description of the assignment."
      />
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="assignments">ASSIGNMENTS</option>
                <option value="quizzes">QUIZZES</option>
                <option value="exams">EXAMS</option>
                <option value="project">PROJECT</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="percentage">Percentage</option>
                <option value="points">Points</option>
                <option value="letter">Letter Grade</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="online">Online</option>
                <option value="on-paper">On Paper</option>
                <option value="no-submission">No Submission</option>
              </select>
              <br />
              <br />

              <div>
                <strong>Online Entry Options</strong>
                <br />

                <input type="checkbox" id="wd-text-entry" />
                <label htmlFor="wd-text-entry">Text Entry</label>
                <br />

                <input type="checkbox" id="wd-website-url" defaultChecked />
                <label htmlFor="wd-website-url">Website URL</label>
                <br />

                <input type="checkbox" id="wd-media-recordings" />
                <label htmlFor="wd-media-recordings">Media Recordings</label>
                <br />

                <input type="checkbox" id="wd-student-annotation" />
                <label htmlFor="wd-student-annotation">
                  Student Annotation
                </label>
                <br />

                <input type="checkbox" id="wd-file-upload" />
                <label htmlFor="wd-file-upload">File Uploads</label>
              </div>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign</label>
            </td>
            <td>
              <label htmlFor="wd-assign-to">Assign to</label>
              <br />
              <input id="wd-assign-to" defaultValue="Everyone" />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input type="date" id="wd-due-date" defaultValue="2024-05-13" />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
              <input
                type="date"
                id="wd-available-from"
                defaultValue="2024-05-06"
              />
              <label htmlFor="wd-available-until">Until</label>
              <input
                type="date"
                id="wd-available-until"
                defaultValue="2024-05-20"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <hr />
      <br />
      <button>Cancel</button>
      <button>Save</button>
    </div>
  );
}
