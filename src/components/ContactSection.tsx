import type { CSSProperties } from "react";
import { FormEvent, useState } from "react";

interface ContactResponse {
  ok: boolean;
  message: string;
}

const codeLines = [
  { number: 1, content: <span className="text-[#f8d75d]">{"{"}</span> },
  {
    number: 2,
    content: (
      <>
        <span className="pl-5 text-[#ff6a2a]">&quot;status&quot;</span>
        <span className="text-[#d8dde7]">: </span>
        <span className="text-[#41e48a]">&quot;open_to_work&quot;</span>
        <span className="text-[#d8dde7]">,</span>
      </>
    ),
  },
  {
    number: 3,
    content: (
      <>
        <span className="pl-5 text-[#ff6a2a]">&quot;email&quot;</span>
        <span className="text-[#d8dde7]">: </span>
        <a className="text-[#ff9c78] transition hover:text-[#ffd0bf]" href="mailto:contact@nguyenduythuan.dev">
          &quot;contact@nguyenduythuan.dev&quot;
        </a>
        <span className="text-[#d8dde7]">,</span>
      </>
    ),
  },
  {
    number: 4,
    content: (
      <>
        <span className="pl-5 text-[#ff6a2a]">&quot;socials&quot;</span>
        <span className="text-[#d8dde7]">: </span>
        <span className="text-[#f8d75d]">{"{"}</span>
      </>
    ),
  },
  {
    number: 5,
    content: (
      <>
        <span className="pl-10 text-[#ff6a2a]">&quot;github&quot;</span>
        <span className="text-[#d8dde7]">: </span>
        <a className="text-[#ff9c78] transition hover:text-[#ffd0bf]" href="https://github.com/" target="_blank" rel="noreferrer">
          &quot;GitHub&quot;
        </a>
        <span className="text-[#d8dde7]">,</span>
      </>
    ),
  },
  {
    number: 6,
    content: (
      <>
        <span className="pl-10 text-[#ff6a2a]">&quot;linkedin&quot;</span>
        <span className="text-[#d8dde7]">: </span>
        <a
          className="text-[#ff9c78] transition hover:text-[#ffd0bf]"
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          &quot;LinkedIn&quot;
        </a>
      </>
    ),
  },
  {
    number: 7,
    content: (
      <>
        <span className="pl-5 text-[#f8d75d]">{"}"}</span>
      </>
    ),
  },
  { number: 8, content: <span className="text-[#f8d75d]">{"}"}</span> },
  { number: 9, content: <span>&nbsp;</span> },
  { number: 10, content: <span className="text-[#7d8794]">{"// Waiting for connection..."}</span> },
  { number: 11, content: <span className="text-[#ff6a2a]">_</span> },
];

function MailIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M4.75 6.75h14.5v10.5H4.75V6.75Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="m5.25 7.25 6.75 5 6.75-5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function CodeIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none">
      <path d="m9 8-4 4 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m15 8 4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlayIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M8 5.5c0-.8.9-1.3 1.6-.9l8.4 5.5c.6.4.6 1.3 0 1.8l-8.4 5.5c-.7.4-1.6-.1-1.6-.9v-11Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function ContactSection() {
  const [status, setStatus] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      subject: String(formData.get("subject") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as ContactResponse;
      if (!response.ok) {
        throw new Error(data.message || "Unable to send message");
      }

      setStatus(data.message || "Message sent successfully.");
      event.currentTarget.reset();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate overflow-hidden bg-[#292929] py-20 text-[#dfe4ec] md:py-28"
    >
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(255,91,46,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,91,46,0.12)_1px,transparent_1px)] bg-[size:58px_58px]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_52%_34%,rgba(255,91,46,0.11),transparent_24%),linear-gradient(180deg,rgba(41,41,41,0.1),rgba(22,22,24,0.48))]" />

      <div className="container">
        <header className="reveal mb-12 flex items-center gap-4 font-display text-3xl font-bold tracking-normal text-[#e7ebf2] md:text-5xl" data-reveal>
          <MailIcon className="h-7 w-7 shrink-0 text-[#ff5b2e]" />
          <h2 id="contact-heading" className="font-mono text-[#e7ebf2]">$ ./contact.exe</h2>
        </header>

        <div className="grid items-start gap-8 lg:grid-cols-[1fr_1fr] xl:gap-14">
          <aside className="reveal overflow-hidden rounded-lg bg-[#171719] shadow-[0_28px_80px_rgba(0,0,0,0.32)]" data-reveal>
            <div className="flex h-12 items-center justify-between bg-[#242426] px-5">
              <div className="flex items-center gap-2.5">
                <span className="h-3.5 w-3.5 rounded-full bg-[#f04045]" />
                <span className="h-3.5 w-3.5 rounded-full bg-[#e9b115]" />
                <span className="h-3.5 w-3.5 rounded-full bg-[#17b750]" />
              </div>
              <div className="flex items-center gap-2 font-mono text-xs tracking-[0.12em] text-[#8a92a0]">
                <CodeIcon className="h-4 w-4 text-[#4f91ff]" />
                contact_info.json
              </div>
            </div>

            <div className="min-h-[330px] overflow-x-auto bg-[#171719] px-5 py-8 font-mono text-sm leading-8 md:px-7 md:text-base">
              <div className="min-w-[520px] space-y-1">
                {codeLines.map((line) => (
                  <div key={line.number} className="grid grid-cols-[2.5rem_1fr] gap-5">
                    <span className="select-none text-right text-[#4b525d]">{line.number}</span>
                    <code className="whitespace-pre">{line.content}</code>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div className="reveal overflow-hidden rounded-lg bg-[#1b1b1d] shadow-[0_28px_80px_rgba(0,0,0,0.35)]" data-reveal style={{ "--reveal-delay": "140ms" } as CSSProperties}>
            <div className="flex h-12 items-center gap-4 bg-[#242426] px-5 font-mono text-sm">
              <span className="font-bold text-[#4f91ff]">TS</span>
              <span className="text-[#c9ced8]">sendMessage.ts</span>
              <span className="text-[#8a92a0]">x</span>
            </div>

            <form className="p-5 md:p-7" onSubmit={handleSubmit}>
              <div className="overflow-hidden rounded-lg border border-[#552312] bg-[#111112]">
                <div className="flex items-center justify-between gap-4 border-b border-[#2c241f] px-5 py-3 font-mono text-xs text-[#777f8d]">
                  <span className="flex items-center gap-2 text-[#cbd1dc]">
                    <MailIcon className="h-4 w-4 text-[#ff5b2e]" />
                    mail.compose
                  </span>
                  <span>secure channel</span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#2c241f] px-5 py-3 font-mono text-xs">
                  <span className="text-[#7d8794]">
                    to: <span className="text-[#ff9c78]">contact@nguyenduythuan.dev</span>
                  </span>
                  <span className="text-[#7d8794]">
                    response: <span className="text-[#41e48a]">within 24h</span>
                  </span>
                </div>

                <div className="grid gap-5 px-5 py-6">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block font-mono text-xs uppercase tracking-[0.08em] text-[#7d8794]" htmlFor="name">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-md border border-white/5 bg-[#18191b] px-4 py-3 font-mono text-sm text-[#e6ebf4] outline-none transition placeholder:text-[#596272] focus:border-[#ff5b2e]/70 focus:ring-2 focus:ring-[#ff5b2e]/20"
                        placeholder="Your Name"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block font-mono text-xs uppercase tracking-[0.08em] text-[#7d8794]" htmlFor="email">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        className="w-full rounded-md border border-white/5 bg-[#18191b] px-4 py-3 font-mono text-sm text-[#e6ebf4] outline-none transition placeholder:text-[#596272] focus:border-[#ff5b2e]/70 focus:ring-2 focus:ring-[#ff5b2e]/20"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block font-mono text-xs uppercase tracking-[0.08em] text-[#7d8794]" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      required
                      className="w-full rounded-md border border-white/5 bg-[#18191b] px-4 py-3 font-mono text-sm text-[#e6ebf4] outline-none transition placeholder:text-[#596272] focus:border-[#ff5b2e]/70 focus:ring-2 focus:ring-[#ff5b2e]/20"
                      placeholder="Project inquiry / Collaboration"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-mono text-xs uppercase tracking-[0.08em] text-[#7d8794]" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full resize-none rounded-md border border-white/5 bg-[#18191b] px-4 py-3 font-mono text-sm text-[#e6ebf4] outline-none transition placeholder:text-[#596272] focus:border-[#ff5b2e]/70 focus:ring-2 focus:ring-[#ff5b2e]/20"
                      placeholder="Tell me about your project, timeline, and goals..."
                    />
                  </div>

                  <p className="font-mono text-xs text-[#7d8794]">
                    {"// Protected by spam filters and rate limits"}
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-3 rounded-md border border-[#ff6a1f]/45 bg-[#6d330e] px-6 py-3 font-mono text-sm font-bold uppercase text-[#ffd0bf] shadow-[0_0_28px_rgba(255,91,46,0.16)] transition hover:bg-[#ff6a1f] hover:text-[#171719] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <PlayIcon />
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>

                <p role="status" aria-live="polite" className="font-mono text-sm text-[#41e48a]">
                  {status}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
