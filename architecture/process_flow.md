graph TD
    %% Define Styles
    classDef system fill:#f9f9f9,stroke:#333,stroke-width:2px;
    classDef userAction fill:#e1f5fe,stroke:#0288d1,stroke-width:2px;
    classDef autoAction fill:#e8f5e9,stroke:#388e3c,stroke-width:2px;

    %% Nodes
    A[Dynamics 365 Case Opened] ::: system
    B{Extension Ingests DOM Data} ::: autoAction
    C[User Investigates Case] ::: userAction
    D[User Selects Decision in Custom UI] ::: userAction
    E[Auto-Draft & Send Contextual Email] ::: autoAction
    F[Auto-Populate Compulsory D365 Forms] ::: autoAction
    G[Auto-Close Ticket] ::: autoAction
    H[Save Session Data to Local Storage] ::: autoAction
    I[Export CSV for Stonemonkey Import] ::: autoAction

    %% Flow
    A --> B
    B --> C
    C --> D
    D --> E
    E --> F
    F --> G
    G --> H
    H --> I
