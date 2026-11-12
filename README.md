# CRM Automation Engine (Case Study)

👉 **[Click here to view the Interactive UI Mockup]([https://ashrafamiranalysis.github.io/crm-automation-engine/ui_mockups/extension_ui.html])**

> **Note:** Due to NDA and intellectual property guidelines, the core source code for this project is proprietary and cannot be shared. This repository serves as a technical case study demonstrating the system architecture, UI/UX design principles, and business impact of the tool.

## Overview
A custom browser-level automation extension designed to optimize ticket resolution workflows within Microsoft Dynamics 365. Built in my second month on the job, this tool eliminates manual data entry, automates template generation, and cross-references data dynamically.

## Business Impact
* **Efficiency:** Reduced average case handling time from 8-10 minutes to <2 minutes (80% reduction).
* **Throughput:** Increased daily resolution capacity from 40 cases to 100+ cases.
* **Scalability:** Successfully pitched to shareholders for regional expansion across MY, TH, VN, PH, and ID.

## Architecture & Workflow
1. **Data Ingestion:** Reads the active DOM layer in D365 to extract case variables.
2. **Decision Matrix:** User selects a reaction via the custom UI; the extension maps this to the appropriate workflow.
3. **Automated Execution:** Programmatically drafts emails, populates compulsory forms, and closes the ticket.
4. **Data Export:** Serializes session data into a localized CSV for zero-touch import into external productivity trackers.

## Technical Skills Highlighted
* DOM Manipulation & Browser Extension APIs
* Workflow Automation & ETL (CSV Generation)
* UI/UX Design
* Prompt Engineering & AI-Assisted Development
