import { AppPageHeader } from "@/components/app-page-header";
import { QueryPlayground } from "@/components/query-playground";
import { SourceChunkViewer } from "@/components/source-chunk-viewer";

export default function PlaygroundPage() {
  return (
    <>
      <AppPageHeader eyebrow="Query playground" title="Test answers, refusals, and citation paths." copy="The sample question tests a claim decision where source quality and exception language matter." />
      <QueryPlayground />
      <div className="mt-6">
        <SourceChunkViewer />
      </div>
    </>
  );
}
