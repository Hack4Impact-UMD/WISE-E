import React from "react";
import { Container, Link } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const Donate = () => {
  return (
    <Container>
      <Typography variant="h5">Support Us</Typography>

      <Typography>
        Click the button on the right to give securely online via our Joint Plan
        of Work partner, Virginia Organizing. We thank you, in advance, for your
        generosity in helping us make our area a more sustainable environment in
        which to live, work and play.
      </Typography>

      <Typography>
        Note: Virginia Organizing is officially registered with the Department
        of Agriculture and Consumer Services, P.O. Box 1163, Richmond, VA 23209.
        You can write to this Department for all relevant financial statements
        and procedures regarding the solicitation of contributions. Your
        donation is tax-deductible to the extent allowed by law.
      </Typography>

      <br></br>
      <Typography variant="h6">Tax Deduction Information</Typography>
      <Typography variant="body1">
        Did you know that charitable gifts to WISE.E are tax deductible under
        section 501(c)(3) of the Internal Revenue Code?
      </Typography>

      <Typography variant="body1">
        Organization Name: Virginia Organizing<br></br>
        Tax ID: 54-1674992
      </Typography>

      <Typography variant="body1">
        To deduct a charitable contribution, you must file Form 1040 and itemize
        deductions on Schedule A. Here are some resources from the IRS to help:
      </Typography>

      <Typography>
        <Link href="https://www.irs.gov/taxtopics/tc506">Publication 526</Link>
      </Typography>

      <Typography>
        <Link href="https://www.irs.gov/publications/p526#en_US_2015_publink1000229849">
          How to report on lines 16 through 19 of Schedule A (Form 1040)
        </Link>
      </Typography>
    </Container>
  );
};

export default Donate;
