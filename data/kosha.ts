import {
  Activity,
  Archive,
  BadgeCheck,
  BookOpenCheck,
  Boxes,
  Braces,
  ClipboardCheck,
  DatabaseZap,
  FileCheck2,
  FileText,
  Fingerprint,
  Gauge,
  GitBranch,
  KeyRound,
  Landmark,
  Languages,
  LockKeyhole,
  Logs,
  Network,
  ScanSearch,
  ShieldCheck,
  ShieldEllipsis,
  Stethoscope,
  TimerReset,
  UserCheck
} from "lucide-react";

export const navItems = [
  { label: "Product", href: "/product" },
  { label: "Use cases", href: "/use-cases" },
  { label: "Security", href: "/security" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "/docs" }
];

export const appNavItems = [
  { label: "Dashboard", href: "/app", icon: Activity },
  { label: "Onboarding", href: "/app/onboarding", icon: ClipboardCheck },
  { label: "Collections", href: "/app/collections", icon: Boxes },
  { label: "Ingestion", href: "/app/ingestion", icon: DatabaseZap },
  { label: "Playground", href: "/app/playground", icon: ScanSearch },
  { label: "Citations", href: "/app/citations", icon: GitBranch },
  { label: "Evals", href: "/app/evaluations", icon: Gauge },
  { label: "Audit logs", href: "/app/audit-logs", icon: Logs },
  { label: "Profiles", href: "/app/compliance", icon: ShieldCheck },
  { label: "Settings", href: "/app/settings", icon: KeyRound }
];

export const heroDocuments = [
  { name: "RBI circular.pdf", type: "regulator circular", status: "parsed", confidence: 96 },
  { name: "claims-policy.docx", type: "policy wording", status: "chunked", confidence: 93 },
  { name: "discharge-summary.pdf", type: "scanned health record", status: "ocr checked", confidence: 89 },
  { name: "kyc-sop.pdf", type: "operations SOP", status: "permissioned", confidence: 98 }
];

export const pipelineSteps = [
  {
    title: "Upload",
    label: "Connect folders, buckets, or manual uploads",
    detail: "Scanned PDFs, circulars, SOPs, policy schedules, and regional-language files enter a controlled ingestion lane."
  },
  {
    title: "Parse",
    label: "OCR, tables, metadata, and redaction checks",
    detail: "Kosha preserves source structure so page-level citations and reviewer context survive retrieval."
  },
  {
    title: "Retrieve",
    label: "Permissions filter before vector search",
    detail: "The system rejects requests when user, role, collection, or policy profile does not allow access."
  },
  {
    title: "Cite",
    label: "Every answer resolves to sources",
    detail: "Answers carry document, page, chunk, confidence, and evidence status by default."
  },
  {
    title: "Audit",
    label: "Immutable event trail for production",
    detail: "Each query produces a trace with retrieval decisions, policy checks, citations, latency, and API identity."
  }
];

export const dashboardMetrics = [
  { label: "Knowledge health", value: "94%", delta: "+3.2%", tone: "teal" },
  { label: "Documents indexed", value: "18,420", delta: "782 today", tone: "blue" },
  { label: "Citation coverage", value: "98.7%", delta: "+1.1%", tone: "copper" },
  { label: "Low-confidence queries", value: "31", delta: "-18%", tone: "warning" },
  { label: "Eval pass rate", value: "91.4%", delta: "+4.8%", tone: "success" },
  { label: "Audit events", value: "2.8M", delta: "30d retained", tone: "blue" },
  { label: "API usage", value: "842k", delta: "68 ms p95", tone: "teal" },
  { label: "Open compliance tasks", value: "7", delta: "3 due", tone: "danger" }
];

export const pipelineStatus = [
  { label: "Ingested", count: 18420, completion: 100, status: "ready" },
  { label: "Parsed", count: 17988, completion: 97, status: "ready" },
  { label: "Chunked", count: 17710, completion: 96, status: "ready" },
  { label: "Embedded", count: 17182, completion: 93, status: "syncing" },
  { label: "Evaluated", count: 16204, completion: 88, status: "review" },
  { label: "Ready", count: 15870, completion: 86, status: "production" }
];

export const collections = [
  {
    name: "Claims adjudication",
    owner: "Insurance ops",
    documents: 4210,
    coverage: "99.1%",
    permissions: "role + region",
    freshness: "8 min ago"
  },
  {
    name: "KYC operations",
    owner: "Risk platform",
    documents: 2830,
    coverage: "97.6%",
    permissions: "team + purpose",
    freshness: "22 min ago"
  },
  {
    name: "Regulatory circulars",
    owner: "Compliance",
    documents: 1160,
    coverage: "100%",
    permissions: "global read",
    freshness: "1 hr ago"
  },
  {
    name: "Clinical summaries",
    owner: "Health data",
    documents: 6220,
    coverage: "94.3%",
    permissions: "consent + role",
    freshness: "12 min ago"
  }
];

export const ingestionJobs = [
  { file: "IRDAI_product_filing_2025.pdf", stage: "OCR", progress: 71, pages: 84, issue: "2 scanned pages queued" },
  { file: "regional_claim_notes_hi.pdf", stage: "language detect", progress: 44, pages: 212, issue: "mixed script" },
  { file: "KYC_exception_sop.docx", stage: "chunking", progress: 87, pages: 39, issue: "none" },
  { file: "SEBI_cyber_resilience.pdf", stage: "permission map", progress: 63, pages: 126, issue: "review tags" }
];

export const retrievedChunks = [
  {
    doc: "claims-policy.docx",
    page: 18,
    chunk: "CLM-18-04",
    confidence: 0.94,
    reason: "Defines document submission timelines and insurer discretion for delayed intimation.",
    permission: "passed",
    text: "Claims may be reviewed when required documents are submitted after the specified thirty-day window, subject to stated exceptions and documented cause."
  },
  {
    doc: "IRDAI_policy_data_workflow.pdf",
    page: 7,
    chunk: "IRDAI-07-02",
    confidence: 0.88,
    reason: "Operational evidence requirement for rejection decisions.",
    permission: "passed",
    text: "Adverse claim outcomes should retain source references, reviewer notes, and the policy basis used for the decision."
  },
  {
    doc: "claims-exceptions-addendum.pdf",
    page: 3,
    chunk: "ADD-03-01",
    confidence: 0.81,
    reason: "Exception language for hospitalization and discharge delay.",
    permission: "passed",
    text: "Late submission alone is not sufficient when the delay is supported by hospitalization records or other accepted cause."
  }
];

export const auditEvents = [
  { event: "query.created", actor: "api_key_live_7f3", at: "12:09:41.233", result: "accepted", trace: "qry_82f19a" },
  { event: "retrieval.started", actor: "claims-prod", at: "12:09:41.251", result: "3 collections", trace: "ret_19a62c" },
  { event: "permission.checked", actor: "role:claims_reviewer", at: "12:09:41.267", result: "passed", trace: "prm_6b28d0" },
  { event: "answer.generated", actor: "kosha-runtime", at: "12:09:41.441", result: "cited", trace: "ans_5a72dd" },
  { event: "citation.attached", actor: "citation-engine", at: "12:09:41.457", result: "3 sources", trace: "cit_921f0b" },
  { event: "eval.failed", actor: "nightly-eval", at: "11:52:19.010", result: "1 regression", trace: "evl_41ac8f" },
  { event: "api_key.rotated", actor: "visha@kosha.dev", at: "10:18:03.992", result: "complete", trace: "key_778a1d" },
  { event: "data.deleted", actor: "retention-policy", at: "03:00:00.008", result: "expired", trace: "del_13dca9" }
];

export const complianceProfiles = [
  {
    title: "DPDP-ready controls",
    icon: Fingerprint,
    description: "Operational controls aligned to notice, consent, retention, masking, and evidence export.",
    retention: "Purpose-bound retention with delete traces",
    logging: "Access, query, export, and deletion logs",
    masking: "PII masking before indexing",
    access: "Role, purpose, and collection policies",
    evidence: "Consent and deletion evidence bundle",
    breach: "Incident fields for impact and notification"
  },
  {
    title: "CERT-In logging posture",
    icon: TimerReset,
    description: "Logging posture for incident triage, clock sync, API attribution, and retention workflows.",
    retention: "Configurable retention windows",
    logging: "Timestamped immutable event stream",
    masking: "Secret redaction in traces",
    access: "Admin action approvals",
    evidence: "Exportable audit packets",
    breach: "Timeline and responder fields"
  },
  {
    title: "RBI outsourcing support pack",
    icon: Landmark,
    description: "Controls that help document vendor oversight and production data boundaries.",
    retention: "Data-location and expiry rules",
    logging: "Vendor activity and API usage logs",
    masking: "Sensitive fields encrypted and masked",
    access: "Least-privilege service roles",
    evidence: "Outsourcing control evidence",
    breach: "Escalation owner and severity fields"
  },
  {
    title: "SEBI cyber-resilience support pack",
    icon: ShieldEllipsis,
    description: "Operational evidence for cyber resilience workflows, retrieval safety, and review queues.",
    retention: "Policy-linked retention classes",
    logging: "Security events and eval regressions",
    masking: "Trade and account identifiers masked",
    access: "Reviewer and auditor roles",
    evidence: "Control run history exports",
    breach: "Affected collection and API scope"
  },
  {
    title: "IRDAI policy-data workflow",
    icon: FileCheck2,
    description: "Policy document handling for claim answers, rejection evidence, and reviewer handoff.",
    retention: "Claim and policy retention lanes",
    logging: "Answer, citation, and reviewer traces",
    masking: "Member IDs and health details masked",
    access: "Branch, role, and claim-owner rules",
    evidence: "Claim decision evidence packet",
    breach: "Policy impact and claim scope"
  },
  {
    title: "ABDM-style health-data handling",
    icon: Stethoscope,
    description: "Health-data expectations for consent-scoped access, minimization, and traceable use.",
    retention: "Consent-window retention",
    logging: "Consent, read, answer, and export logs",
    masking: "Clinical identifiers and PHI masking",
    access: "Consent + clinician role checks",
    evidence: "Consent-scoped audit export",
    breach: "Patient impact and remediation fields"
  }
];

export const evalMetrics = [
  { label: "Golden test set", value: "1,240", detail: "cases across claims, KYC, circulars" },
  { label: "Hallucination rate", value: "0.7%", detail: "down from 1.9%" },
  { label: "Citation coverage", value: "98.7%", detail: "answers with accepted proof" },
  { label: "Refusal correctness", value: "94.2%", detail: "unsafe queries refused" },
  { label: "Retrieval precision", value: "91.8%", detail: "top-5 source quality" },
  { label: "Latency", value: "684 ms", detail: "p95 production" },
  { label: "Cost per 1k queries", value: "₹142", detail: "embedding + answer runtime" }
];

export const failedExamples = [
  {
    query: "Can expired KYC be used for a wallet limit increase?",
    failure: "Retrieved outdated SOP",
    owner: "Risk platform",
    severity: "medium"
  },
  {
    query: "Does this circular apply to insurance distributors?",
    failure: "Weak citation coverage",
    owner: "Compliance",
    severity: "high"
  },
  {
    query: "Summarize Hindi discharge notes for claim denial.",
    failure: "Needs human review",
    owner: "Health data",
    severity: "medium"
  }
];

export const pricingPlans = [
  {
    name: "Pilot",
    price: "₹25k setup",
    cadence: "7-day implementation",
    description: "For teams proving safe document answers against one workflow.",
    features: ["One production-like collection", "Citation enforcement", "50 golden evals", "Audit export", "Implementation review"]
  },
  {
    name: "Startup",
    price: "₹50k/month",
    cadence: "production launch",
    description: "For teams shipping cited answers into one product surface.",
    features: ["3 collections", "Role-based permissions", "Nightly evals", "API keys", "Compliance profile templates"]
  },
  {
    name: "Scale",
    price: "₹1.5L/month",
    cadence: "multiple workflows",
    description: "For regulated teams with higher document volume and review needs.",
    features: ["10 collections", "Human review queues", "Advanced audit logs", "Custom eval sets", "Priority support"]
  },
  {
    name: "Enterprise/VPC",
    price: "Custom",
    cadence: "private deployment",
    description: "For strict network, residency, or vendor governance requirements.",
    features: ["VPC deployment", "Custom retention", "SSO/SAML", "Dedicated controls", "Architecture review"]
  }
];

export const useCases = [
  {
    title: "Claims and policy answers",
    icon: FileText,
    copy: "Answer policy questions with claim-safe citations, reviewer handoff, and source page evidence."
  },
  {
    title: "KYC and risk operations",
    icon: UserCheck,
    copy: "Search SOPs, exception notes, and onboarding rules without exposing restricted customer records."
  },
  {
    title: "Regulatory circular intelligence",
    icon: BookOpenCheck,
    copy: "Turn RBI, SEBI, IRDAI, and internal policy updates into cited internal answers."
  },
  {
    title: "Health document workflows",
    icon: Stethoscope,
    copy: "Handle scanned discharge summaries, consent windows, and clinical identifiers with review gates."
  },
  {
    title: "Regional-language file handling",
    icon: Languages,
    copy: "Detect mixed-script files, preserve document context, and route low-confidence parsing to review."
  },
  {
    title: "Production API traces",
    icon: Braces,
    copy: "Give engineering one API with answer, sources, confidence, policy decision, and audit id."
  }
];

export const securityControls = [
  {
    title: "Permissions before retrieval",
    detail: "Kosha filters collection, role, purpose, and document policies before semantic search runs.",
    icon: LockKeyhole
  },
  {
    title: "Citations as enforcement",
    detail: "The runtime can refuse answers that do not meet citation, confidence, or source diversity rules.",
    icon: BadgeCheck
  },
  {
    title: "Audit-first runtime",
    detail: "Every API call leaves a query trace, retrieval trace, permission result, answer event, and citation packet.",
    icon: Archive
  },
  {
    title: "Source-aware evaluation",
    detail: "Golden sets test hallucination, citation coverage, refusal correctness, retrieval precision, latency, and cost.",
    icon: Network
  }
];

export const apiSnippet = `curl https://api.kosha.dev/v1/answers \\
  -H "Authorization: Bearer $KOSHA_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "collection": "claims-prod",
    "profile": "irdai-policy-data",
    "user": { "role": "claims_reviewer", "region": "west" },
    "query": "Can this claim be rejected if documents arrived after 30 days?",
    "require_citations": true
  }'`;

export const apiResponse = `{
  "policy_decision": "answered",
  "confidence": 0.91,
  "answer": "The claim can be reviewed for late document submission, but late submission alone is not sufficient when an accepted cause is documented.",
  "citations": [
    { "document": "claims-policy.docx", "page": 18, "chunk": "CLM-18-04" },
    { "document": "claims-exceptions-addendum.pdf", "page": 3, "chunk": "ADD-03-01" }
  ],
  "audit_id": "aud_01hxy9p7"
}`;

export const onboardingSteps = [
  { title: "Connect source", detail: "Upload files, connect S3, or start with a manual collection.", done: true },
  { title: "Set permissions", detail: "Map roles, purpose, collection access, and retention class.", done: true },
  { title: "Choose compliance profile", detail: "Apply operational controls aligned to your workflow.", done: false },
  { title: "Run evals", detail: "Load golden questions and block production on failing behavior.", done: false },
  { title: "Create API key", detail: "Issue a scoped production key with audit logging enabled.", done: false }
];
