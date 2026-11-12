/**
 * @fileoverview Generic utility to safely extract data from a web-based CRM.
 * Demonstrates safe DOM traversal and error handling.
 */

class CRMDataExtractor {
    constructor() {
        // Use generic selectors for portfolio purposes
        this.selectors = {
            customerName: '.crm-field-cust-name',
            caseId: '#incident-id-value',
            issueType: '[data-id="case-type"]'
        };
    }

    /**
     * Safely attempts to read a DOM element's text content.
     * @param {string} selector - The CSS selector to find.
     * @returns {string|null} The text content or null if not found.
     */
    extractField(selector) {
        try {
            const element = document.querySelector(selector);
            return element ? element.innerText.trim() : null;
        } catch (error) {
            console.error(`Extraction failed for selector: ${selector}`, error);
            return null;
        }
    }

    /**
     * Compiles all required case data into a standardized object.
     * @returns {Object} Structured case data.
     */
    getCasePayload() {
        return {
            name: this.extractField(this.selectors.customerName),
            id: this.extractField(this.selectors.caseId),
            type: this.extractField(this.selectors.issueType),
            timestamp: new Date().toISOString()
        };
    }
}
