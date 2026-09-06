"use client";

import { useState } from "react";
import { contacts, contactCategories } from "@/data/contacts";
import ContactCard from "@/components/ContactCard";

export default function ContactsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredContacts = contacts.filter(
    (c) => selectedCategory === "all" || c.category === selectedCategory
  );

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Important Contacts
            </h1>
            <p className="text-lg text-primary-100">
              Public contact numbers for education, health, police,
              and utilities in and around Nammivanipeta
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-slate-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {contactCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat.id
                    ? "bg-primary-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-4 text-sm text-slate-600">
          Showing {filteredContacts.length} contacts
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </section>

      {/* Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <h3 className="font-semibold text-yellow-800 mb-2">
            Contact Information Note
          </h3>
          <p className="text-sm text-yellow-700 leading-relaxed">
            Contact details shown here include verified public emergency numbers and
            general service categories. Specific local contact details will be updated
            after field verification. Please verify details through official sources
            before use.
          </p>
        </div>
      </section>
    </div>
  );
}
