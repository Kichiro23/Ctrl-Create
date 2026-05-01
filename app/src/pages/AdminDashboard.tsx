import { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { trpc } from "@/providers/trpc";
import { useAuth } from "@/hooks/useAuth";
import {
  Mail,
  MailOpen,
  Trash2,
  Inbox,
  Eye,
  EyeOff,
  RefreshCw,
  MessageSquare,
  Crown,
  Package,
  Users,
  ShoppingBag,

} from "lucide-react";
import SEO from "@/components/SEO";

type Tab = "messages" | "memberships" | "orders";

export default function AdminDashboard() {
  const { user, isAuthenticated, isLoading } = useAuth({
    redirectOnUnauthenticated: true,
  });
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>("messages");

  if (!isLoading && isAuthenticated && user?.role !== "admin") {
    navigate("/");
  }

  const utils = trpc.useUtils();

  const { data: messages, isLoading: messagesLoading } = trpc.message.list.useQuery(undefined, {
    enabled: user?.role === "admin",
  });

  const { data: memberships, isLoading: membershipsLoading } = trpc.membership.list.useQuery(undefined, {
    enabled: user?.role === "admin",
  });

  const { data: orders, isLoading: ordersLoading } = trpc.templateOrder.list.useQuery(undefined, {
    enabled: user?.role === "admin",
  });

  const updateMessageStatus = trpc.message.updateStatus.useMutation({
    onSuccess: () => utils.message.list.invalidate(),
  });

  const deleteMessage = trpc.message.delete.useMutation({
    onSuccess: () => utils.message.list.invalidate(),
  });

  const updateMembershipStatus = trpc.membership.updateStatus.useMutation({
    onSuccess: () => utils.membership.list.invalidate(),
  });

  const deleteMembership = trpc.membership.delete.useMutation({
    onSuccess: () => utils.membership.list.invalidate(),
  });

  const updateOrderStatus = trpc.templateOrder.updateStatus.useMutation({
    onSuccess: () => utils.templateOrder.list.invalidate(),
  });

  const deleteOrder = trpc.templateOrder.delete.useMutation({
    onSuccess: () => utils.templateOrder.list.invalidate(),
  });

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="h-8 w-8 rounded-full border-2 border-[var(--accent-blue)]/30 border-t-[var(--accent-blue)]"
        />
      </div>
    );
  }

  if (!isAuthenticated || user?.role !== "admin") {
    return null;
  }

  const totalMessages = messages?.length || 0;
  const unreadMessages = messages?.filter((m) => m.readStatus === "unread").length || 0;
  const totalMemberships = memberships?.length || 0;
  const pendingMemberships = memberships?.filter((m) => m.status === "pending").length || 0;
  const totalOrders = orders?.length || 0;
  const pendingOrders = orders?.filter((o) => o.status === "pending").length || 0;

  const tabs: { key: Tab; label: string; icon: React.ElementType }[] = [
    { key: "messages", label: "Messages", icon: MessageSquare },
    { key: "memberships", label: "Memberships", icon: Crown },
    { key: "orders", label: "Template Orders", icon: Package },
  ];

  return (
    <div className="min-h-screen px-4 pb-12 pt-24 md:px-6 lg:px-8">
      <SEO
        title="Admin Dashboard | Cylux Code"
        description="Admin dashboard for managing messages, memberships, and template orders."
        pathname="/admin"
        noindex
      />
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
            Admin Dashboard
          </h1>
          <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
            Manage inquiries, memberships, and template orders
          </p>
        </div>

        {/* Stats Cards */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="glass-card p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "rgba(0, 122, 255, 0.1)" }}>
                <Inbox size={20} style={{ color: "var(--accent-blue)" }} />
              </div>
              <div>
                <p className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>{totalMessages}</p>
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>Total Messages</p>
              </div>
            </div>
          </div>
          <div className="glass-card p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "rgba(255, 59, 48, 0.1)" }}>
                <Mail size={20} style={{ color: "var(--error)" }} />
              </div>
              <div>
                <p className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>{unreadMessages}</p>
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>Unread</p>
              </div>
            </div>
          </div>
          <div className="glass-card p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "rgba(255, 149, 0, 0.1)" }}>
                <Crown size={20} style={{ color: "#FF9500" }} />
              </div>
              <div>
                <p className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>{totalMemberships}</p>
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>Memberships ({pendingMemberships} pending)</p>
              </div>
            </div>
          </div>
          <div className="glass-card p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "rgba(52, 199, 89, 0.1)" }}>
                <ShoppingBag size={20} style={{ color: "var(--success)" }} />
              </div>
              <div>
                <p className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>{totalOrders}</p>
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>Orders ({pendingOrders} pending)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6 flex flex-wrap items-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeTab === tab.key ? "text-white" : "border"
              }`}
              style={
                activeTab === tab.key
                  ? { background: "var(--accent-blue)" }
                  : { borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }
              }
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Messages Table */}
        <AnimatePresence mode="wait">
          {activeTab === "messages" && (
            <motion.div
              key="messages"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="glass-card overflow-hidden"
            >
              <div className="flex items-center justify-between border-b p-4" style={{ borderColor: "var(--border-subtle)" }}>
                <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>Messages</h2>
                <button
                  onClick={() => utils.message.list.invalidate()}
                  className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <RefreshCw size={16} />
                </button>
              </div>
              {messagesLoading ? (
                <div className="p-8 text-center">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="mx-auto h-6 w-6 rounded-full border-2 border-[var(--accent-blue)]/30 border-t-[var(--accent-blue)]" />
                </div>
              ) : messages && messages.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b text-left text-xs font-semibold uppercase tracking-wider" style={{ borderColor: "var(--border-subtle)", color: "var(--text-muted)" }}>
                        <th className="px-4 py-3">Status</th>
                        <th className="px-4 py-3">Name</th>
                        <th className="px-4 py-3">Email</th>
                        <th className="px-4 py-3">Service</th>
                        <th className="px-4 py-3">Budget</th>
                        <th className="px-4 py-3">Discount</th>
                        <th className="px-4 py-3">Date</th>
                        <th className="px-4 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {messages.map((msg) => (
                        <tr key={msg._id} className="border-b transition-colors" style={{ borderColor: "var(--border-subtle)" }}>
                          <td className="px-4 py-3">
                            {msg.readStatus === "unread" ? (
                              <span className="flex items-center gap-1 text-xs font-medium" style={{ color: "var(--error)" }}><Mail size={14} /> Unread</span>
                            ) : (
                              <span className="flex items-center gap-1 text-xs font-medium" style={{ color: "var(--success)" }}><MailOpen size={14} /> Read</span>
                            )}
                          </td>
                          <td className="px-4 py-3 text-sm font-medium" style={{ color: "var(--text-primary)" }}>{msg.name}</td>
                          <td className="px-4 py-3 text-sm" style={{ color: "var(--text-secondary)" }}>{msg.email}</td>
                          <td className="px-4 py-3 text-sm" style={{ color: "var(--text-secondary)" }}>{msg.serviceType || "—"}</td>
                          <td className="px-4 py-3 text-sm" style={{ color: "var(--text-secondary)" }}>{msg.budget || "—"}</td>
                          <td className="px-4 py-3">
                            {msg.discountType && msg.discountType !== "none" ? (
                              <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white ${
                                msg.discountType === "student" ? "bg-amber-500" :
                                msg.discountType === "pwd" ? "bg-blue-500" :
                                "bg-green-500"
                              }`}>
                                {msg.discountType === "student" ? "Student" : msg.discountType === "pwd" ? "PWD" : "Senior"}
                              </span>
                            ) : (
                              <span className="text-xs" style={{ color: "var(--text-muted)" }}>—</span>
                            )}
                          </td>
                          <td className="px-4 py-3 text-xs" style={{ color: "var(--text-muted)" }}>{msg.createdAt ? new Date(msg.createdAt).toLocaleDateString() : "—"}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => updateMessageStatus.mutate({ id: msg._id, readStatus: msg.readStatus === "unread" ? "read" : "unread" })}
                                className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-[var(--bg-surface-solid)]"
                                style={{ color: "var(--text-secondary)" }}
                                title={msg.readStatus === "unread" ? "Mark as read" : "Mark as unread"}
                              >
                                {msg.readStatus === "unread" ? <Eye size={14} /> : <EyeOff size={14} />}
                              </button>
                              <button
                                onClick={() => { if (confirm("Delete this message?")) deleteMessage.mutate({ id: msg._id }); }}
                                className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-red-50"
                                style={{ color: "var(--error)" }}
                                title="Delete"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="py-14 text-center">
                  <Inbox size={32} className="mx-auto" style={{ color: "var(--text-muted)" }} />
                  <p className="mt-3 text-sm" style={{ color: "var(--text-secondary)" }}>No messages yet</p>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === "memberships" && (
            <motion.div
              key="memberships"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="glass-card overflow-hidden"
            >
              <div className="flex items-center justify-between border-b p-4" style={{ borderColor: "var(--border-subtle)" }}>
                <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>Membership Applications</h2>
                <button
                  onClick={() => utils.membership.list.invalidate()}
                  className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <RefreshCw size={16} />
                </button>
              </div>
              {membershipsLoading ? (
                <div className="p-8 text-center">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="mx-auto h-6 w-6 rounded-full border-2 border-[var(--accent-blue)]/30 border-t-[var(--accent-blue)]" />
                </div>
              ) : memberships && memberships.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b text-left text-xs font-semibold uppercase tracking-wider" style={{ borderColor: "var(--border-subtle)", color: "var(--text-muted)" }}>
                        <th className="px-4 py-3">Status</th>
                        <th className="px-4 py-3">Name</th>
                        <th className="px-4 py-3">Email</th>
                        <th className="px-4 py-3">Tier</th>
                        <th className="px-4 py-3">Date</th>
                        <th className="px-4 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {memberships.map((m) => (
                        <tr key={m._id} className="border-b transition-colors" style={{ borderColor: "var(--border-subtle)" }}>
                          <td className="px-4 py-3">
                            <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize ${
                              m.status === "active" ? "bg-green-100 text-green-700" :
                              m.status === "pending" ? "bg-yellow-100 text-yellow-700" :
                              m.status === "expired" ? "bg-gray-100 text-gray-700" :
                              "bg-red-100 text-red-700"
                            }`}>
                              {m.status}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm font-medium" style={{ color: "var(--text-primary)" }}>{m.name}</td>
                          <td className="px-4 py-3 text-sm" style={{ color: "var(--text-secondary)" }}>{m.email}</td>
                          <td className="px-4 py-3 text-sm capitalize" style={{ color: "var(--text-secondary)" }}>{m.tier}</td>
                          <td className="px-4 py-3 text-xs" style={{ color: "var(--text-muted)" }}>{m.createdAt ? new Date(m.createdAt).toLocaleDateString() : "—"}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-1">
                              <select
                                value={m.status}
                                onChange={(e) => updateMembershipStatus.mutate({ id: m._id, status: e.target.value as any })}
                                className="rounded-lg border px-2 py-1 text-xs"
                                style={{ borderColor: "var(--border-subtle)", color: "var(--text-primary)", background: "var(--bg-surface-solid)" }}
                              >
                                <option value="pending">Pending</option>
                                <option value="active">Active</option>
                                <option value="expired">Expired</option>
                                <option value="cancelled">Cancelled</option>
                              </select>
                              <button
                                onClick={() => { if (confirm("Delete this membership?")) deleteMembership.mutate({ id: m._id }); }}
                                className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-red-50"
                                style={{ color: "var(--error)" }}
                                title="Delete"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="py-14 text-center">
                  <Users size={32} className="mx-auto" style={{ color: "var(--text-muted)" }} />
                  <p className="mt-3 text-sm" style={{ color: "var(--text-secondary)" }}>No memberships yet</p>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === "orders" && (
            <motion.div
              key="orders"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="glass-card overflow-hidden"
            >
              <div className="flex items-center justify-between border-b p-4" style={{ borderColor: "var(--border-subtle)" }}>
                <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>Template Orders</h2>
                <button
                  onClick={() => utils.templateOrder.list.invalidate()}
                  className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <RefreshCw size={16} />
                </button>
              </div>
              {ordersLoading ? (
                <div className="p-8 text-center">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="mx-auto h-6 w-6 rounded-full border-2 border-[var(--accent-blue)]/30 border-t-[var(--accent-blue)]" />
                </div>
              ) : orders && orders.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b text-left text-xs font-semibold uppercase tracking-wider" style={{ borderColor: "var(--border-subtle)", color: "var(--text-muted)" }}>
                        <th className="px-4 py-3">Status</th>
                        <th className="px-4 py-3">Name</th>
                        <th className="px-4 py-3">Email</th>
                        <th className="px-4 py-3">Template</th>
                        <th className="px-4 py-3">Price</th>
                        <th className="px-4 py-3">Date</th>
                        <th className="px-4 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((o) => (
                        <tr key={o._id} className="border-b transition-colors" style={{ borderColor: "var(--border-subtle)" }}>
                          <td className="px-4 py-3">
                            <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize ${
                              o.status === "paid" || o.status === "fulfilled" ? "bg-green-100 text-green-700" :
                              o.status === "pending" ? "bg-yellow-100 text-yellow-700" :
                              "bg-red-100 text-red-700"
                            }`}>
                              {o.status}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm font-medium" style={{ color: "var(--text-primary)" }}>{o.name}</td>
                          <td className="px-4 py-3 text-sm" style={{ color: "var(--text-secondary)" }}>{o.email}</td>
                          <td className="px-4 py-3 text-sm" style={{ color: "var(--text-secondary)" }}>{o.templateName}</td>
                          <td className="px-4 py-3 text-sm font-semibold" style={{ color: "var(--accent-blue)" }}>₱{o.pricePHP}</td>
                          <td className="px-4 py-3 text-xs" style={{ color: "var(--text-muted)" }}>{o.createdAt ? new Date(o.createdAt).toLocaleDateString() : "—"}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-1">
                              <select
                                value={o.status}
                                onChange={(e) => updateOrderStatus.mutate({ id: o._id, status: e.target.value as any })}
                                className="rounded-lg border px-2 py-1 text-xs"
                                style={{ borderColor: "var(--border-subtle)", color: "var(--text-primary)", background: "var(--bg-surface-solid)" }}
                              >
                                <option value="pending">Pending</option>
                                <option value="paid">Paid</option>
                                <option value="fulfilled">Fulfilled</option>
                                <option value="cancelled">Cancelled</option>
                              </select>
                              <button
                                onClick={() => { if (confirm("Delete this order?")) deleteOrder.mutate({ id: o._id }); }}
                                className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-red-50"
                                style={{ color: "var(--error)" }}
                                title="Delete"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="py-14 text-center">
                  <Package size={32} className="mx-auto" style={{ color: "var(--text-muted)" }} />
                  <p className="mt-3 text-sm" style={{ color: "var(--text-secondary)" }}>No orders yet</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
