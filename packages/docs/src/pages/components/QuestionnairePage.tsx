import { useState } from 'react';
import { H2 } from '@/components/DocsHeading';
import {
  Questionnaire,
  QuestionnaireDescription,
  QuestionnaireItem,
  QuestionnaireOption,
  QuestionnaireOptions,
  QuestionnaireQuestion,
} from 'rakit-ui';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function QuestionnairePage() {
  const [jawaban, setJawaban] = useState('cli');

  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Questionnaire</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Daftar pertanyaan berurutan dengan pilihan jawaban. Seluruh kartu
          berfungsi sebagai label, jadi klik di mana pun akan memilih opsinya.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add questionnaire" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import {
  Questionnaire,
  QuestionnaireDescription,
  QuestionnaireItem,
  QuestionnaireOption,
  QuestionnaireOptions,
  QuestionnaireQuestion,
} from "@/components/ui/questionnaire"

export function QuestionnaireDemo() {
  const [jawaban, setJawaban] = React.useState("cli")

  return (
    <Questionnaire>
      <QuestionnaireItem>
        <QuestionnaireQuestion>
          Bagaimana kamu memasang komponen?
        </QuestionnaireQuestion>
        <QuestionnaireDescription>
          Pilih satu yang paling sering kamu pakai.
        </QuestionnaireDescription>
        <QuestionnaireOptions value={jawaban} onValueChange={setJawaban}>
          <QuestionnaireOption value="cli" description="Lewat perintah rakit-ui add">
            CLI
          </QuestionnaireOption>
          <QuestionnaireOption value="salin" description="Menyalin kode dari dokumentasi">
            Salin manual
          </QuestionnaireOption>
        </QuestionnaireOptions>
      </QuestionnaireItem>
    </Questionnaire>
  )
}`}
        >
          <Questionnaire className="max-w-md text-left">
            <QuestionnaireItem>
              <QuestionnaireQuestion>Bagaimana kamu memasang komponen?</QuestionnaireQuestion>
              <QuestionnaireDescription>
                Pilih satu yang paling sering kamu pakai.
              </QuestionnaireDescription>
              <QuestionnaireOptions value={jawaban} onValueChange={setJawaban}>
                <QuestionnaireOption value="cli" description="Lewat perintah rakit-ui add">
                  CLI
                </QuestionnaireOption>
                <QuestionnaireOption
                  value="salin"
                  description="Menyalin kode dari dokumentasi"
                >
                  Salin manual
                </QuestionnaireOption>
              </QuestionnaireOptions>
            </QuestionnaireItem>
          </Questionnaire>
        </ComponentPreview>
      </div>
    </>
  );
}
