import { AppPageHeader } from "@/components/app-page-header";
import { CitationTrail } from "@/components/citation-trail";
import { SourceChunkViewer } from "@/components/source-chunk-viewer";

export default function CitationsPage() {
  return (
    <>
      <AppPageHeader eyebrow="Citations inspector" title="Proof paths from answer to source chunk." copy="Citation trails show source document, page, chunk, confidence, retrieval reason, and whether permission checks passed." />
      <CitationTrail large />
      <div className="mt-6">
        <SourceChunkViewer />
      </div>
    </>
  );
}
