"use client";

import React, { useState, useEffect } from "react";
import { Bookmark, Share2, Check, Copy, MessageCircle, Mail } from "lucide-react";

interface ArticleShareBookmarkBarProps {
  title: string;
  excerpt?: string;
  slug: string;
}

export default function ArticleShareBookmarkBar({
  title,
  excerpt = "",
  slug,
}: ArticleShareBookmarkBarProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("digitalraiz_bookmarks");
      if (saved) {
        const bookmarks: string[] = JSON.parse(saved);
        if (bookmarks.includes(slug)) {
          setIsBookmarked(true);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, [slug]);

  const toggleBookmark = () => {
    try {
      const saved = localStorage.getItem("digitalraiz_bookmarks");
      let bookmarks: string[] = saved ? JSON.parse(saved) : [];
      if (bookmarks.includes(slug)) {
        bookmarks = bookmarks.filter((item) => item !== slug);
        setIsBookmarked(false);
      } else {
        bookmarks.push(slug);
        setIsBookmarked(true);
      }
      localStorage.setItem("digitalraiz_bookmarks", JSON.stringify(bookmarks));
    } catch (e) {
      console.error(e);
    }
  };

  const getShareUrl = () => {
    if (typeof window !== "undefined") {
      return window.location.href;
    }
    return `https://digitalraiz.com/blogs/${slug}`;
  };

  const handleShareClick = () => {
    const isMobile =
      typeof navigator !== "undefined" &&
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    if (isMobile && navigator.share) {
      navigator
        .share({
          title,
          text: excerpt || title,
          url: getShareUrl(),
        })
        .catch(() => {
          setShowShareMenu((prev) => !prev);
        });
    } else {
      setShowShareMenu((prev) => !prev);
    }
  };

  const copyToClipboard = () => {
    const url = getShareUrl();
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const shareUrls = {
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(title + " - " + getShareUrl())}`,
    gmail: `https://mail.google.com/mail/?view=cm&fs=1&tf=1&su=${encodeURIComponent(title)}&body=${encodeURIComponent("Check out this article from Digital Raiz: " + title + "\n\n" + getShareUrl())}`,
    email: `mailto:?subject=${encodeURIComponent(title + " | Digital Raiz Journal")}&body=${encodeURIComponent("Check out this article: " + title + "\n\n" + getShareUrl())}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(getShareUrl())}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(getShareUrl())}`,
  };

  return (
    <div className="relative">
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 flex items-center justify-between text-xs font-bold text-slate-600 shadow-2xs">
        {/* Bookmark Action */}
        <button
          type="button"
          onClick={toggleBookmark}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-xl transition-all duration-200 cursor-pointer border-0 ${isBookmarked
            ? "bg-pink-50 text-pink-600 border border-pink-200/60"
            : "hover:bg-slate-100 text-slate-600"
            }`}
          title={isBookmarked ? "Remove Bookmark" : "Save Bookmark"}
        >
          <Bookmark
            className={`w-4 h-4 transition-transform active:scale-125 ${isBookmarked ? "fill-pink-500 text-pink-500" : "text-pink-500"
              }`}
          />
          <span>{isBookmarked ? "Bookmarked" : "Bookmark Article"}</span>
        </button>

        {/* Share Action */}
        <div className="relative">
          <button
            type="button"
            onClick={handleShareClick}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white hover:bg-pink-50 border border-slate-200/80 hover:border-pink-200 text-pink-600 transition-all duration-200 cursor-pointer shadow-2xs"
          >
            <span>{copied ? "Link Copied!" : "Share"}</span>
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
          </button>

          {/* Social Share Menu Dropdown */}
          {showShareMenu && (
            <div className="absolute right-0 bottom-full mb-2 w-52 bg-white rounded-2xl border border-slate-200 shadow-xl p-2 z-50 animate-fade-in space-y-1">
              <div className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400 px-3 py-1.5 border-b border-slate-100">
                Share Article
              </div>

              <a
                href={shareUrls.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowShareMenu(false)}
                className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-500" />
                <span>WhatsApp</span>
              </a>

              <a
                href={shareUrls.gmail}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowShareMenu(false)}
                className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-rose-50 hover:text-rose-600 rounded-xl transition-colors"
              >
                <Mail className="w-4 h-4 text-rose-500" />
                <span>Gmail</span>
              </a>

              <a
                href={shareUrls.email}
                onClick={() => setShowShareMenu(false)}
                className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-900 rounded-xl transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Mail App</span>
              </a>

              <a
                href={shareUrls.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowShareMenu(false)}
                className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors"
              >
                <svg className="w-4 h-4 fill-current text-blue-600" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href={shareUrls.twitter}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowShareMenu(false)}
                className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-sky-50 hover:text-sky-600 rounded-xl transition-colors"
              >
                <svg className="w-4 h-4 fill-current text-sky-500" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>Twitter / X</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  copyToClipboard();
                  setShowShareMenu(false);
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-pink-50 hover:text-pink-600 rounded-xl transition-colors cursor-pointer border-0 text-left"
              >
                <Copy className="w-4 h-4 text-pink-500" />
                <span>Copy Link</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
