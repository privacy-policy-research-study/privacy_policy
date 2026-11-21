# One-link randomized study setup

Participant entry: https://privacy-policy-research-study.github.io/privacy_policy/

1. Add the five missing exact Qualtrics URLs to `src/studySurveyLinks.js`. The Chat URL is already set from the provided link.
2. Upload these project files to the existing GitHub repository (replace matching files). Do not upload the ZIP as a single file. The six presentation JSX and CSS files are untouched.
3. Wait for the GitHub Actions deployment to succeed. Test all six modes and the main entry link.
4. In Qualtrics, configure the end-of-survey redirect to https://privacy-policy-research-study.github.io/privacy_policy/?stage=thanks . Qualtrics may require an appropriate license/settings for redirects.
5. Review welcome/consent wording with your research team before recruiting participants.

The random assignment is uniform and stored in the participant's browser. It is not quota-balanced across participants or devices. A previously assigned participant returning in the same browser gets the same format. Existing ?mode= links remain for researcher testing. The main URL is the only participant-facing URL.
