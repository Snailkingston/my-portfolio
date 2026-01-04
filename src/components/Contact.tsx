import { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Calendar,
  Send,
  Github,
  Linkedin,
  MapPin,
  Globe,
  CheckCircle,
  PhoneIncoming,
  PhoneCall,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // ✅ Updated handleSubmit - works with Netlify Function send-email.js
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", email: "", subject: "", message: "" });
        }, 3000);
      } else {
        console.error("Error sending email:", await res.text());
        alert(t('contact.form.error'));
      }
    } catch (err) {
      console.error("Network error:", err);
      alert(t('contact.form.networkError'));
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Contact methods with translation keys
  const contactMethods = [
    {
      icon: Mail,
      labelKey: 'contact.methods.email.label',
      valueKey: 'contact.methods.email.value',
      link: "mailto:suffo.nzogang.patrice1@gmail.com",
      color: "blue",
    },
    {
      icon: Calendar,
      labelKey: 'contact.methods.calendar.label',
      valueKey: 'contact.methods.calendar.value',
      link: "https://calendly.com/patrice_nzogang/30min",
      color: "indigo",
    },
    {
      icon: Github,
      labelKey: 'contact.methods.github.label',
      valueKey: 'contact.methods.github.value',
      link: "https://github.com/Snailkingston",
      color: "purple",
    },
    {
      icon: Linkedin,
      labelKey: 'contact.methods.linkedin.label',
      valueKey: 'contact.methods.linkedin.value',
      link: "https://www.linkedin.com/in/suffo-nzogang-patrice-43ba0628b/",
      color: "blue",
    },
    {
      icon: PhoneIncoming,
      labelKey: 'contact.methods.whatsapp.label',
      valueKey: 'contact.methods.whatsapp.value',
      link: "https://wa.me/+237697353791?text=Hello,  %20I'd%20like%20to%20inquire%20about%20your%20services",
      color: "pink",
    },
    {
      icon: PhoneCall,
      labelKey: 'contact.methods.phone.label',
      valueKey: 'contact.methods.phone.value',
      link: "tel:+237697353791",
      color: "pink",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<
      string,
      { bg: string; text: string; gradient: string }
    > = {
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        gradient: "from-blue-600 to-blue-700",
      },
      indigo: {
        bg: "bg-indigo-100",
        text: "text-indigo-600",
        gradient: "from-indigo-600 to-indigo-700",
      },
      purple: {
        bg: "bg-purple-100",
        text: "text-purple-600",
        gradient: "from-purple-600 to-purple-700",
      },
      pink: {
        bg: "bg-pink-100",
        text: "text-pink-600",
        gradient: "from-pink-600 to-pink-700",
      },
    };
    return colors[color];
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 dark:text-blue-400 uppercase tracking-wide">
            {t('contact.title')}
          </span>
          <h2 className="mt-2 text-slate-900 dark:text-slate-100">
            {t('contact.subtitle')}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-slate-900 dark:text-slate-100 mb-4">
                {t('contact.contactMethods')}
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const colorClasses = getColorClasses(method.color);
                  return (
                    <a
                      key={index}
                      href={method.link}
                      target={
                        method.link.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        method.link.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-start space-x-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group"
                    >
                      <div
                        className={`w-10 h-10 ${colorClasses.bg} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <method.icon
                          className={colorClasses.text}
                          size={20}
                        />
                      </div>
                      <div>
                        <div className="text-slate-900 group-hover:text-blue-600 transition-colors">
                          {t(method.labelKey)}
                        </div>
                        <div className="text-slate-600 text-sm">
                          {t(method.valueKey)}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Info */}
            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
              <h4 className="text-slate-900 dark:text-slate-100 mb-4">
                {t('contact.quickInfo')}
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-300">
                  <MapPin
                    size={16}
                    className="text-blue-600 dark:text-blue-400"
                  />
                  <span>{t('contact.availableRemote')}</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-300">
                  <Globe
                    size={16}
                    className="text-blue-600 dark:text-blue-400"
                  />
                  <span>{t('contact.languages')}</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-300">
                  <CheckCircle
                    size={16}
                    className="text-green-600 dark:text-green-400"
                  />
                  <span>{t('contact.availableOpportunities')}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <h3 className="text-slate-900 dark:text-slate-100 mb-6">
                {t('contact.sendMessage')}
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-950 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle
                      className="text-green-600 dark:text-green-400"
                      size={32}
                    />
                  </div>
                  <h4 className="text-slate-900 dark:text-slate-100 mb-2">
                    {t('contact.messageSent')}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    {t('contact.messageSentDesc')}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-slate-700 dark:text-slate-300 mb-2"
                      >
                        {t('contact.form.name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder={t('contact.form.namePlaceholder')}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-slate-700 dark:text-slate-300 mb-2"
                      >
                        {t('contact.form.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder={t('contact.form.emailPlaceholder')}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-slate-700 dark:text-slate-300 mb-2"
                    >
                      {t('contact.form.subject')}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder={t('contact.form.subjectPlaceholder')}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-slate-700 dark:text-slate-300 mb-2"
                    >
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder={t('contact.form.messagePlaceholder')}
                    />
                  </div>

                  <button
                    type="submit"
                    onClick={() => (window.location.href = 'mailto:suffo.nzogang.patrice1@gmail.com')}
                    className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all group"
                  >
                    <Send
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                    <span>{t('contact.form.send')}</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Elevator Pitches */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700"
        >
          <h3 className="text-slate-900 dark:text-slate-100 mb-6 text-center">{t('contact.reachOut')}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-lg">
              <h4 className="text-blue-900 dark:text-blue-100 mb-2">{t('contact.reachOutItems.fulltime.title')}</h4>
              <p className="text-slate-700 dark:text-slate-300 text-sm">
                {t('contact.reachOutItems.fulltime.description')}
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950 dark:to-indigo-900 rounded-lg">
              <h4 className="text-indigo-900 dark:text-indigo-100 mb-2">{t('contact.reachOutItems.contract.title')}</h4>
              <p className="text-slate-700 dark:text-slate-300 text-sm">
                {t('contact.reachOutItems.contract.description')}
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 rounded-lg">
              <h4 className="text-purple-900 dark:text-purple-100 mb-2">{t('contact.reachOutItems.opensource.title')}</h4>
              <p className="text-slate-700 dark:text-slate-300 text-sm">
                {t('contact.reachOutItems.opensource.description')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
