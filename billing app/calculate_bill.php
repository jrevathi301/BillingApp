<?php
require_once __DIR__ . '/vendor/autoload.php';
use PhpAmqpLib\Connection\AMQPStreamConnection;
use PhpAmqpLib\Message\AMQPMessage;

// connect to RabbitMQ server
$connection = new AMQPStreamConnection('localhost', 5672, 'guest', 'guest');
$channel = $connection->channel();

// create queue to send invoices
$queueName = 'invoices';
$channel->queue_declare($queueName, false, false, false, false);

// construct message with invoice data
$invoiceData = array(
  'customer_email' => $_POST['customer_email'], // get email from form data
  'products' => $_POST['products'], // get products from form data
  'amount_paid' => $_POST['amount_paid'], // get amount paid from form data
  'denominations' => $_POST['denominations'] // get denominations from form data
);
$message = new AMQPMessage(json_encode($invoiceData));

// publish message to queue
$channel->basic_publish($message, '', $queueName);

// close connection
$channel->close();
$connection->close();
?>
