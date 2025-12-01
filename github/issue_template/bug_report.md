name: Bug Report
description: File a bug report for TrinityShield
title: "[BUG] "
labels: ["bug"]

body:
  - type: textarea
    id: problem
    attributes:
      label: What happened?
      description: Describe the unexpected behavior
      placeholder: "When I open ChatGPT, TrinityShield does..."
    validations:
      required: true

  - type: textarea
    id: expected
    attributes:
      label: What did you expect?
      placeholder: "I expected TrinityShield to..."

  - type: textarea
    id: logs
    attributes:
      label: Console Logs
      placeholder: "Paste any warnings or errors"
